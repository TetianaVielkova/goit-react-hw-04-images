
import {Header, Form, Button, Input} from './Searchbar.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GoSearch} from 'react-icons/go';
import PropTypes from 'prop-types';
import { useState } from "react";



export const Searchbar = ({onSubmit}) => {
    const [imageName, setImageName] = useState('');

    const handleChange = event => {
        setImageName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (imageName.trim() === '') {
            toast.error(' Entry image name!');
            return;
        }

        onSubmit(imageName);
        setImageName('');
    };

        return(
            <Header>
                <Form onSubmit={handleSubmit}>
                    <Button type="submit">
                    <GoSearch style={{width: "25px",height: "35px"}}/>
                    </Button>
                    <Input
                    type="text"
                    name="imageName"
                    autoFocus
                    autocomplete="off"
                    value={imageName}
                    onChange={handleChange}
                    placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        )
}


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}