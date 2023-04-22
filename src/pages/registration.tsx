import { useFormik } from "formik";
import { createPath } from '@/utility/createPath';
import { ROUTE } from '@/router/routes';
import Layout from '@/components/layout/Layout';
 
const Registration = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordRepeat: ""
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log("values: ", values);
        }
    })

    return ( 
        <Layout meta={{ title: "Registration", description: "user registration page" }}>
            
        </Layout>
    );
};

export default Registration;