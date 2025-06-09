import React from "react";
import { useForm } from "react-hook-form";

// to know more about hook form refer to this link: https://react-hook-form.com/
function CarRentalForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log("Rental Form Data:", data);
    alert("Your rental booking has been submitted!");
  };

  const carModels = [
    { id: 1, name: "Sedan" },
    { id: 2, name: "SUV" },
    { id: 3, name: "Convertible" },
    { id: 4, name: "Truck" },
  ];

  return (
      <>
        <div className="container mt-5 d-flex justify-content-center">
          <div className="p-4 border rounded bg-light">
            <h1 className="text-center mb-4">Car Rental Form</h1>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                    id="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", { required: "Full Name is required" })}
                />
                {/* errors will return when field validation fails*/ }
                {errors.name && (
                    <div className="text-danger">{errors.name.message}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                    id="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                />
                {errors.email && (
                    <div className="text-danger">{errors.email.message}</div>
                )}
              </div>

              {/* Car Model */}
              <div className="mb-3">
                <label htmlFor="carModel" className="form-label">
                  Car Model
                </label>
                <select
                    id="carModel"
                    className={`form-select ${errors.carModel ? "is-invalid" : ""}`}
                    {...register("carModel", {
                      required: "Please select a car model",
                    })}
                >
                  {carModels.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name}
                      </option>
                  ))}
                </select>
                {errors.carModel && (
                    <div className="text-danger">{errors.carModel.message}</div>
                )}
              </div>

              {/* Rental Start Date */}
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label">
                  Rental Start Date
                </label>
                <input
                    id="startDate"
                    type="date"
                    className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
                    {...register("startDate", { required: "Start date is required" })}
                />
                {errors.startDate && (
                    <div className="text-danger">{errors.startDate.message}</div>
                )}
              </div>

              {/* Rental End Date */}
              <div className="mb-3">
                <label htmlFor="endDate" className="form-label">
                  Rental End Date
                </label>
                <input
                    id="endDate"
                    type="date"
                    className={`form-control ${errors.endDate ? "is-invalid" : ""}`}
                    {...register("endDate", { required: "End date is required" })}
                />
                {errors.endDate && (
                    <div className="text-danger">{errors.endDate.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  );
}

export default CarRentalForm;