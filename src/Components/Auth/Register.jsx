import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Container from '../../Container/Container';
import { useQuery } from '../../hooks/useQuery';
import { login } from '../../Store/reducers/authReducers';
import './Style.scss'

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('مقداری وارد نشده است').min(6, 'نام کاربری کوتاه است'),
    email: Yup.string().required('مقداری وارد نشده است').email('آدرس ایمیل صحیح نیست'),
    password: Yup.string().required('مقداری وارد نشده است').min(8, 'رمز عبور کوتاه است')
})

const Register = () => {

    const { user } = useSelector(state => state.auth);
    const history = useNavigate();
    const dispatch = useDispatch();

    const query = useQuery();
    const redirect = query.get("redirect") || "/panel"
    useEffect(() => {
        if (user) {
            return history(redirect)
        }
    }, [redirect, user])

    const onSubmit = (values) => {
        dispatch(login(values))
        history("/panel")
    }



    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true
    })

    return (
        <Container>
            <section className="form">
                <form className="form-wrap" onSubmit={formik.handleSubmit}>
                    <h3 className="form-wrap__title">Register</h3>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('name')} placeholder=" " name="name" />
                        <label htmlFor="name" className="form-wrap__box-label">Name</label>
                        {formik.errors.name && formik.touched.name && <div className='form-wrap__box-error'>{formik.errors.name}</div>}
                    </div>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('email')} placeholder=" " name="email" />
                        <label htmlFor="email" className="form-wrap__box-label">Email</label>
                        {formik.errors.email && formik.touched.email && <div className='form-wrap__box-error'>{formik.errors.email}</div>}
                    </div>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('password')} placeholder=" " name="password" />
                        <label htmlFor="password" className="form-wrap__box-label">Password</label>
                        {formik.errors.password && formik.touched.password && <div className='form-wrap__box-error'>{formik.errors.password}</div>}

                    </div>
                    <input type="submit" className="form-wrap__button" value="Create Account" disabled={!formik.isValid} />
                </form>
            </section>
        </Container>
    );
};

export default Register;
