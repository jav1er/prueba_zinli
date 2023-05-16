import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    telefono: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^[0-9]+$/, "Solo se admiten números"),
    nombre: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
    apellido: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras"),
    mail: yup
      .string()
      .required("Este campo es requerido")
      .email("Email invalido"),
  })
  .required()

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      telefono: "",
      nombre: "",
      apellido: "",
      mail: "",
    },
  })
  useEffect(() => {
    console.log(errors)
  }, [errors])

  const onSubmit = async (data) => {
    if (isValid) {
      const response = await fetch(
        "https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      )
    }

    console.log(response)
    // setFormOneData({ ...data, amount })
    // setFormOneStatus(isValid)
  }

  return (
    <>
      <section className="formSection" >
        <div className="container">
          <div className="wrapper">
            <h2 className="title">Contáctanos</h2>
            {/* <Image src={brushTwo} alt="Pintura" className={styles.brush} /> */}
          </div>
          <div className="content-form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="formGroup">
                <label htmlFor="firstname" className="label">
                  Nombre
                </label>
                <input className="input" type="text" {...register("nombre")} />
                {errors.nombre?.message && (
                  <p className="message">{errors.nombre?.message}</p>
                )}
              </div>
              <div className="formGroup">
                <label htmlFor="lastname" className="label">
                  Apellido
                </label>
                <input
                  className="input"
                  type="text"
                  {...register("apellido")}
                />    
                <p className="message">{errors.apellido?.message}</p>
              </div>
              <div className="formGroup">
                <label htmlFor="name" className="label">
                  Mail
                </label>
                <input className="input" type="text" {...register("mail")} />

                <p className="message">{errors.mail?.message}</p>
              </div>
              <div className="formGroup">
                <label htmlFor="name" className="label">
                  Teléfono
                </label>
                <input
                  className="input"
                  type="number"
                  {...register("telefono")}
                />

                <p className="message">{errors.telefono?.message}</p>
              </div>

              <button disabled={!isValid} type="submit" className="button">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}
