import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseOrigin, chooseSize, chooseYear } from "../redux/slices/RootSlice"

interface WhiskeyFormProps {
  id?: string[];
  onClose: () => void;
}

const WhiskeyForm = ( props:WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseOrigin(data.origin));
      dispatch(chooseSize(data.bottle_size));
      dispatch(chooseYear(data.year_made));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name of Whiskey</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="origin">Origin of Whiskey</label>
          <Input {...register('origin')} name='origin' placeholder="Origin" />
        </div>
        <div>
          <label htmlFor="bottle_size">Bottle Size</label>
          <Input {...register('bottle_size')} name='bottle_size' placeholder="Bottle Size" />
        </div>
        <div>
          <label htmlFor="year_made">Year Made</label>
          <Input {...register('year_made')} name='year_made' placeholder="Year Made" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskeyForm