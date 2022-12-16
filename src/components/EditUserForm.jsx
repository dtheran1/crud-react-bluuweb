import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = ({ currentUser, updateUser }) => {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: currentUser
    });
    setValue('name', currentUser.name);
    setValue('username', currentUser.username);

    const onSubmit = (data, e) => {
        data.id = currentUser.id
        updateUser(currentUser.id, data)
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
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;