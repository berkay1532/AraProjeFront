import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { Input } from "../common/Input";

interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  skills: string;
}

interface ModalProps {
  mode: "add" | "edit";
  experience: ExperienceData | null;
  closeModal: () => void;
  onSubmit: (data: ExperienceData) => void;
}

const Modal: React.FC<ModalProps> = ({
  mode,
  experience,
  closeModal,
  onSubmit,
}) => {
  const toast = useToast();
  const [formData, setFormData] = useState<ExperienceData>({
    title: "",
    company: "",
    duration: "",
    skills: "",
  });

  useEffect(() => {
    if (mode === "edit" && experience) {
      setFormData(experience);
    }
  }, [mode, experience]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    toast({
      title: mode === "add" ? "Yeni Deneyim Eklendi" : "Deneyim Güncellendi",
      status: "success",
      isClosable: true,
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-[#1d1d1d] bg-opacity-50 flex justify-center items-center">
      <div className="p-6 rounded-lg w-1/3 bg-[#1C1C1C]">
        <h2 className="text-xl font-medium mb-4">
          {mode === "add" ? "Yeni Deneyim Ekle" : "Deneyimi Düzenle"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              name="title"
              value={formData.title}
              handleChange={handleChange}
              placeholder="Çalışma Ünvanı"
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="company"
              value={formData.company}
              handleChange={handleChange}
              placeholder="Şirket"
              insidePlaceholder="Çalıştığınız şirketin adını girin."
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="duration"
              value={formData.duration}
              handleChange={handleChange}
              placeholder="Süre"
              insidePlaceholder="Toplam çalışma sürenizi girin."
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="skills"
              value={formData.skills}
              handleChange={handleChange}
              placeholder="Yetenekler"
              insidePlaceholder="Çalıştığınız süreçte kullandığınız teknolojileri girin."
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-4 bg-gray-200 py-2 px-5 rounded-2xl text-[#1C1C1C]"
            >
              İptal
            </button>
            <button
              type="submit"
              className="bg-[#23BDFF] rounded-2xl text-white font-medium text-base py-2 px-5 "
            >
              {mode === "add" ? "Ekle" : "Güncelle"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
