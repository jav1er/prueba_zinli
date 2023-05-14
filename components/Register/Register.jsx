import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useData from "../../hooks/useData";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const schema = yup
  .object({
    avatar: yup.string(),
    username: yup
      .string()
      .required("Este campo es requerido")
      .min(2, "debe colocar minimo 2 caracteres")
      .max(20, "Este debe llevar maximo 20 caracteres")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
    name: yup
      .string()
      .required("Este campo es requerido")
      .min(2, "debe colocar minimo 2 caracteres")
      .max(20, "Este debe llevar maximo 20 caracteres")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
    surname: yup
      .string()
      .required("Este campo es requerido")
      .min(2, "debe colocar minimo 2 caracteres")
      .max(20, "Este debe llevar maximo 20 caracteres")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
  })
  .required();

export default function Register() {
  const { formRegisterData, setFormRegisterData, setReloadUser } = useData();

  const localStorageKey = "register-data";
  const [ value, setLocalStorage] = useLocalStorage(localStorageKey);

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
      avatar:
        "https://loremflickr.com/cache/resized/65535_52893558487_b5dcac7206_n_320_240_nofilter.jpg",
      username: "rangel",
      name: "tttttt",
      surname: "ttttt",
    },
  });

  // useEffect(() => {
  //   console.log(errors);
  // }, [errors]);

  const onSubmit = async (data) => {
    if (isValid) {
      setLocalStorage(data);
      alert("registro exitoso puede hacer login");

      setTimeout(_ => router.push("/"), 4000);
    }
    // setFormOneData({ ...data, amount })
    // setFormOneStatus(isValid)
  };

  return (
    <>
      <section className="formSection">
        <div className="container">
          <div className="wrapper">
            <h1 className="title">Digital Tech Ing  </h1>
          </div>
          <div className="content-register">
            <form onSubmit={handleSubmit(onSubmit)} className="form-register">
              <div className="formGroup">
                <input
                  placeholder="url img"
                  className="input"
                  type="text"
                  {...register("avatar")}
                />
                {errors.avatar?.message && (
                  <p className="message">{errors.avatar?.message}</p>
                )}
              </div>

              <div className="formGroup">
                <input
                  placeholder="username"
                  className="input"
                  type="text"
                  {...register("username")}
                />
                {errors.username?.message && (
                  <p className="message">{errors.username?.message}</p>
                )}
              </div>

              <div className="formGroup">
                <input
                  placeholder="name"
                  className="input"
                  type="text"
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p className="message">{errors.name?.message}</p>
                )}
              </div>

              <div className="formGroup">
                <input
                  placeholder="surname"
                  className="input"
                  type="text"
                  {...register("surname")}
                />
                {errors.surname?.message && (
                  <p className="message">{errors.surname?.message}</p>
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
