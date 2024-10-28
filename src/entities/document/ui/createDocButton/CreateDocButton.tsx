import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

import { newDocument } from "@/shared/consts/consts";
import { Button } from "@/shared/ui/button";

import { createDocument } from "../../model/api/api";

interface CreateDocButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const CreateDocButton = ({ className }: CreateDocButtonProps) => {
  const navigate = useNavigate();
  const [createDoc, { isLoading }] = createDocument();

  const handleClick = async () => {
    const document = await createDoc(newDocument).unwrap();
    navigate(`/document/${document.id}`);
  };

  return (
    <Button onClick={handleClick} className={className}>
      {isLoading ? "Loading..." : "+ New Document"}
    </Button>
  );
};
