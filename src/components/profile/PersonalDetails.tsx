import React from "react";
import { Input } from "../common/Input";
import { useFormik } from "formik";
import { TextareaField } from "../common/TextArea";
import { SelectInput } from "../common/Select";
import { useToast } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PersonalDetails = () => {
  const toast = useToast();

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    dirty,
  } = useFormik({
    initialValues: {
      fullName: "Kerem Kaya",
      email: "kerem.kaya@std.yildiz.edu.tr",
      university: "Yıldız Teknik Üniversitesi",
      description: "",
      position: "Manager",
      number: "5524592081",
      gender: "male",
      birthDate: new Date(),
    },
    onSubmit: (values) => {
      toast({
        title: "Bilgileriniz Başarıyla Güncellendi",
        status: "success",
        isClosable: true,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-span-2 border-b-[2px] border-[#23BDFF] border-opacity-50 font-medium text-xl mx-4 mt-4 w-36 flex justify-center items-center">
        Kişi Bilgileri
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 m-4 flex flex-col gap-y-4">
          <Input
            type="text"
            name="fullName"
            value={values.fullName}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.fullName}
            errorText={errors.fullName}
            placeholder="Ad Soyad"
            insidePlaceholder="Kutay Sarı"
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.email}
            errorText={errors.email}
            placeholder="E-mail"
            insidePlaceholder="inancozkayaa@gmail.com"
          />
          <Input
            type="text"
            name="university"
            value={values.university}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.university}
            errorText={errors.university}
            placeholder="Okul / Üniversite"
            insidePlaceholder="Yıldız Teknik Üniversitesi"
          />
          <TextareaField
            name="description"
            value={values.description}
            handleChange={handleChange}
            placeholder="Açıklama"
            insidePlaceholder="Kendinle Alakalı Birşeyler Yaz"
            classNames={{
              label: "!mb-4",
              textarea: "min-h-[100px] max-h-[250px] ",
              placeholder: "!text-white",
            }}
            maxLength={100}
          />
        </div>
        <div className="col-span-1 m-4 flex flex-col gap-y-4">
          <SelectInput
            name="position"
            value={values.position}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.position}
            errorText={errors.position}
            placeholder="Pozisyon"
            options={[
              { value: "CEO", label: "CEO" },
              { value: "CTO", label: "CTO" },
              { value: "Developer", label: "Developer" },
              { value: "Designer", label: "Designer" },
              { value: "Manager", label: "Manager" },
              { value: "Intern", label: "Intern" },
              { value: "Other", label: "Other" },
            ]}
            classNames={{
              wrapper: "",
              select:
                "px-4 py-3 bg-transparent rounded-2xl text-base focus:border-white hover:border-white font-normal leading-5 border-[1px] w-full border-solid text-white disabled:opacity-20",
              label: "text-sm font-normal text-white",
            }}
          />
          <Input
            type="number"
            name="phone_number"
            value={values.number}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.number}
            errorText={errors.number}
            placeholder="Telefon Numarası"
            insidePlaceholder="+90 5-- --- -- --"
          />
          <div className="w-full flex gap-x-4">
            <div className="w-1/2">
              <SelectInput
                name="gender"
                value={values.gender}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.gender}
                errorText={errors.gender}
                placeholder="Cinsiyet"
                options={[
                  { value: "female", label: "female" },
                  { value: "male", label: "male" },
                ]}
                classNames={{
                  wrapper: "",
                  select:
                    "px-4 py-3 bg-transparent rounded-2xl text-base focus:border-white hover:border-white font-normal leading-5 border-[1px] w-full border-solid text-white disabled:opacity-20",
                  label: "text-sm font-normal text-white",
                }}
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm font-normal text-white">
                Doğum Tarihi
              </label>
              <div className="relative">
                <DatePicker
                  selected={values.birthDate}
                  onChange={(date: any) => setFieldValue("birthDate", date)}
                  onBlur={handleBlur}
                  dateFormat="dd.MM.yyyy"
                  className="px-4 py-3 mt-1 bg-transparent rounded-2xl text-base focus:border-white hover:border-white font-normal leading-5 border-[1px] w-full border-solid text-white disabled:opacity-20"
                />
                <div className="absolute top-[0.3rem] right-0 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7H4v10h16V7h-4M8 3h8m0 0V1m0 2v2m0 0h-8m8 0V1m0 2V3m0 2H8m0 0V1m0 2V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-start w-full h-full mt-10">
            <button
              type="submit"
              className="bg-[#23BDFF] rounded-2xl text-white font-medium text-base py-2 px-5 disabled:opacity-40 "
              disabled={!dirty}
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;
