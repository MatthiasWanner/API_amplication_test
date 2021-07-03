import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Avatar_url" source="avatarUrl" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
