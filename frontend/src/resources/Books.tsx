import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const BooksTitle = () => {
  const record = useRecordContext();
  return <span>Books {record ? `"${ record.Title }"` : ""}</span>;
};

export const BooksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Title" />
<TextField source="Releasedate" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const BooksEdit = () => (
                    <Edit title={<BooksTitle />}>
                      <SimpleForm>
                          <TextInput source="Title"   />
<TextInput source="Releasedate"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const BooksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Title"   />
<TextInput source="Releasedate"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,

    ];


