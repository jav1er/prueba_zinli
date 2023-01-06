import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useData from "../../hooks/useData";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Este campo es requerido")
      .min(2, "minimo 2 numeros")
      .max(20, "maximo 20 numeros ")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
  })
  .required();

export default function Login() {
  const { formLoginData, setFormLoginData, formRegisterData, setReloadUser } =
    useData();

  const router = useRouter();

  const goRegister = () => {
    router.push("/register");
  };

  const goDashBoard = () => {
    router.push("/dashboard");
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = async (data) => {
    console.log(formLoginData);
    console.log(errors);

    if (isValid) {
      setFormLoginData(data);
      if (formRegisterData.username == data.username) {
        goDashBoard();
      } else {
        alert("el usuario no existe registrese");
        router.push("/register");
      }
    }
  };

  return (
    <>
      <section className="formSection">
        <div className="container">
          <div className="wrapper">
            <h1 className="title">Digital Tech Ing</h1>
          </div>
          <div className="content-form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="formGroup">
                <input
                  placeholder="@username"
                  className="input"
                  type="text"
                  {...register("username")}
                />
                {errors.username?.message && (
                  <p className="message">{errors.username?.message}</p>
                )}
              </div>
              <button disabled={!isValid} type="submit" className="button">
                Entrar
              </button>
            </form>
            <div className="contentRegister">
              <span onClick={goRegister}> registrese </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
