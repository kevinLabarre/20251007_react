import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const mySubmit = (formResult) => {
    console.log("formulaire soumis", formResult);
  };

  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <input
        type="text"
        placeholder="nom"
        {...register("name", {
          required: "Le nom est obligatoire",
          maxLength: {
            value: 10,
            message: "10 carac. maximum",
          },
        })}
      />
      <span>{errors.name && errors.name.message}</span>

      <input
        type="number"
        placeholder="calories"
        {...register("calories", {
          min: { value: 0, message: "Valeur positive uniquement" },
        })}
      />
      <span>{errors.calories && errors.calories.message}</span>

      <input
        type="text"
        placeholder="color"
        {...register("color", { required: "Le nom est obligatoire" })}
      />
      <span>{errors.color && errors.color.message}</span>

      <input type="text" placeholder="type" {...register("type")} />

      <button type="submit">Ajouter le produit</button>
    </form>
  );
};
