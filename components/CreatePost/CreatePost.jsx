import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useData from "../../hooks/useData";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup
  .object({
    image: yup.string(),
    message: yup
      .string()
      .required("Este campo es requerido")
      .min(3, "debe colocar minimo 3 caracteres")
      .max(20, "Este debe llevar maximo 20 caracteres")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
    likes: yup
      .string()
      .required("Este campo es requerido")
      .min(3, "debe colocar minimo 3 caracteres")
      .max(20, "Este debe llevar maximo 20 caracteres")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
    author: yup
      .string()
      .required("Este campo es requerido")
      .min(3, "debe colocar minimo 3 caracteres")
      .max(20, "Este debe llevar maximo 20 caracteres")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
  })
  .required();

export default function CreatePost() {

  const { formPostData, setformPostData, setReloadUser } = useData();
  const router = useRouter();
  const goLogin = () => {
    router.push("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      image: "",
      message: "",
      likes: "",
      author: "",
    },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = async (data) => {
    if (isValid) {
      setformPostData(data);
      setReloadUser((x) => !x);
    }

    console.log(formPostData);
  };

  return (
    <>
      <section className="formSection">
        <div className="container">
          <div className="wrapper">
            <h1 className="title">Digital Tech Ing</h1>
          </div>
          <div className="content-register">
            <form onSubmit={handleSubmit(onSubmit)} className="form-register">
              <div className="formGroup">
                <input
                  placeholder="url img"
                  className="input"
                  type="text"
                  {...register("image")}
                />
                {errors.image?.message && (
                  <p className="message">{errors.image?.message}</p>
                )}
              </div>

              <div className="formGroup">
                <input
                  placeholder="message"
                  className="input"
                  type="text"
                  {...register("message")}
                />
                {errors.message?.message && (
                  <p className="message">{errors.message?.message}</p>
                )}
              </div>

              <div className="formGroup">
                <input
                  placeholder="name"
                  className="input"
                  type="text"
                  {...register("likes")}
                />
                {errors.likes?.message && (
                  <p className="message">{errors.likes?.message}</p>
                )}
              </div>

              <div className="formGroup">
                <input
                  placeholder="author"
                  className="input"
                  type="text"
                  {...register("author")}
                />
                {errors.author?.message && (
                  <p className="message">{errors.author?.message}</p>
                )}
              </div>

              <button disabled={!isValid} type="submit" className="button">
                Registrar
              </button>
            </form>
            <div className="contentLogin">
              <span onClick={goLogin}> login </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
