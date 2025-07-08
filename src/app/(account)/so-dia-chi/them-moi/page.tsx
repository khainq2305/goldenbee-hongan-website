
import { Container } from "@/components/container";
import FormAddress from "@/components/FormAddress";
import { Label } from "@/components/ui/label";
import React from "react";

const NewAddressPage = () => {
  return (
    <Container>
        <div className="mb-3 md:mb-4">
        <Label className="font-bold">Nhập địa chỉ mới</Label>
      </div>
        <FormAddress />
    </Container>
  );
};

export default NewAddressPage;