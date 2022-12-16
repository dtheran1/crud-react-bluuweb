import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = ({ addUser }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        addUser(data)
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register('name', { required: { value: true, message: 'Campo obligatorio' } })} />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" {...register('username', { required: { value: true, message: 'Campo obligatorio' } })} />
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;