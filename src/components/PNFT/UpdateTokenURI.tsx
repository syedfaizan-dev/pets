import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Card from "../common/Card";

// UpdateTokenURI Component
export default function UpdateTokenURI() {

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Update Token URI</h2>
      <Input
        placeholder="Enter Token ID"
        type="number"
      />
      <Input
        placeholder="Enter New Token URI"
      />
      <Button>
        Update URI
      </Button>
    </Card>
  );
};