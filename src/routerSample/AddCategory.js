import { Button, Input } from 'antd'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import axios from 'axios'
import React from 'react'

function AddCategory() {

    const submitForm = (values) => {

        let newCategory = {
            name: values.name + 'TR',
            description: values.description
        }
        axios.post("https://northwind.vercel.app/api/categories", newCategory)
        .then((res) => {
            console.log('Success ', res.data);
        })
        
    }



    return (<>
        <Form
            name='basic'
            onFinish={submitForm}
        >

            <FormItem
                label='Category Name'
                name='name'
                rules={[
                    {
                      required: true,
                      message: 'Please input your category name!',
                    },
                  ]}
            >
                <Input />
            </FormItem>


            <FormItem
                label='Category Description'
                name='description'
            >
                <Input />

            </FormItem>
            

            <Button type="primary" htmlType="submit">Submit</Button>


        </Form>
    </>
    )
}

export default AddCategory