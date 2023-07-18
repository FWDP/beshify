import { useForm, FormProvider } from "react-hook-form";
import { Room } from "../types";
import { FormInput } from "../components/InputForm";

const CreateRoom = () => {
  const { trigger } = useForm<Room>();
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="text-center">
          <h1 className="font-bold text-5xl m-8">CREATE ROOM</h1>

          <FormInput
            label="Room🤸name🤸ng🤸mga🤸beshie"
            name="roomName"
            trigger={trigger}
            type="text"
            minLength={2}
            maxLength={8}
          />

          <FormInput
            label="Password"
            name="password"
            trigger={trigger}
            type="password"
            minLength={4}
            maxLength={4}
          />

          <FormInput
            label="Room Size"
            name="roomSize"
            trigger={trigger}
            type="text"
            minLength={1}
            maxLength={10}
          />

          <FormInput
            label="Time🤸to🤸beshify"
            name="timeLimit"
            trigger={trigger}
            type="number"
            minLength={1}
            maxLength={3}
          />

          <button type="submit" className="btn btn-success text-white">
            PLAY NA!
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateRoom;
