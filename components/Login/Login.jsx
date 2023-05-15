import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useData from "../../hooks/useData";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import useSerchUser from "../../hooks/useSerchCollection";
import useValidatedCollection from "../../hooks/useValidatedCollection";

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

  const [arrayCollection] = useLocalStorage("register-data");
  const [, setUserLogged] = useLocalStorage("user-logged");
  const [validatedUser] = useSerchUser("register-data");
  const [searchcValidatedUser] = useValidatedCollection("register-data");
  //const [searchValue] = useSerchUser("user-logged");
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
      username: "rangel",
    },
  });

  // useEffect(() => {
  //   console.log(errors);
  // }, [errors]);

  useEffect(() => {
    console.log(arrayCollection);
  }, [arrayCollection]);

  const onSubmit = async (data) => {
    let toSerch = ["username", data.username];

    let isRegisteredUser = validatedUser(...toSerch);
    let objectUserRegister = searchcValidatedUser(...toSerch);

    if (isValid && isRegisteredUser) {
      setFormLoginData(data);
      setUserLogged(objectUserRegister);
      goDashBoard();
    } else {
      alert("El usuario no existe registrese");
      goRegister();
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
