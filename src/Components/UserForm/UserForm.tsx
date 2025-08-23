import { useForm, type SubmitHandler } from "react-hook-form";

export interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  birthDate: string;
  age: number;
}
interface UserFormProps {
  defaultValues?: Partial<User>;
  onSubmit?: SubmitHandler<User>;
  submitLabel?: string;
  readOnly?: boolean;
  Pageheader: string;
}

export default function UserForm({
  defaultValues,
  onSubmit,
  submitLabel,
  readOnly = false,
  Pageheader,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues });

  //form submission
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (!onSubmit) {
      e.preventDefault(); // Profile mode: no submit
      return;
    }
    // delegate to react-hook-form handler
    return handleSubmit(onSubmit)(e);
  };

  return (
    <>
      <div>
        <h4 className="p-2">{Pageheader}</h4>
        <hr />
      </div>

      <form className="m-5 shadow-lg p-3 " onSubmit={onFormSubmit}>
        <div className="row text-secondary">
          <div className="col-lg-6 my-3 ">
            <label htmlFor="" className="my-3">
              First Name
            </label>
            <input
              type="text"
              placeholder="enter your first name"
              className="form-control "
              {...register("firstName", {
                required: "first name is required",
              })}
              readOnly={readOnly}
            />
            {errors.firstName && (
              <span className=" text-danger">{errors.firstName?.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Email
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="form-control "
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,

                  message: "you must enter a valid email",
                },
              })}
              readOnly={readOnly}
            />
            {errors.email && (
              <span className="text-danger">{errors.email?.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="enter your phone number"
              className="form-control "
              {...register("phone", {
                required: "phone is required",
              })}
              readOnly={readOnly}
            />
            {errors.phone && (
              <span className="text-danger">{errors.phone?.message}</span>
            )}
          </div>
          <div className="col-lg-6 my-3">
            <label htmlFor="" className="my-3">
              Last Name
            </label>
            <input
              type="text"
              placeholder="enter your last name"
              className="form-control"
              {...register("lastName", {
                required: "last name is required",
              })}
              readOnly={readOnly}
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName?.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Age
            </label>
            <input
              type="text"
              placeholder="enter your age"
              className="form-control"
              {...register("age", {
                required: "age is required",
                max: { value: 55, message: "max age is 55" },
                min: { value: 15, message: "min age is 15" },
                valueAsNumber: true,
              })}
              readOnly={readOnly}
            />
            {errors.age && (
              <span className="text-danger">{errors.age?.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Birth Date
            </label>
            <input
              type="text"
              placeholder="enter your birth date"
              className="form-control"
              {...register("birthDate", {
                required: "birth date is required",
              })}
              readOnly={readOnly}
            />
            {errors.birthDate && (
              <span className="text-danger">{errors.birthDate?.message}</span>
            )}
          </div>
        </div>
        <div className="text-center my-2 p-2">
          <button className="btn btn-warning w-50 p-2 text-white">
            {submitLabel}
          </button>
        </div>
      </form>
    </>
  );
}
