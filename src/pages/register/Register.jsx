/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {

    const { createUser,setReload } = useContext(AuthContext)
    const navigate = useNavigate()

    const [eye,setEye] = useState(false)

    const togglePassword = ()=>{
        setEye(!eye)
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');

        console.log(name,email,photoUrl,password);

        createUser(email, password)
            .then(res => {
                // update the profile with current name and photoUrl
                updateProfile(res.user, {
                    displayName: name, photoURL: photoUrl
                })
                    .then(()=>{
                        setReload(true)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    toast.success("Registration Successful",{
                        position: "top-right",
                        duration:5000,
                        style:{width:'250px', height:'70px'},
                    });
                setTimeout(() => {
                    navigate('/')
                }, 1600);
                // console.log(res.user);
            })
            .catch(error => {
                toast.error("Something is went wrong!",{
                    position: "top-right",
                    duration:5000,
                    style:{width:'250px', height:'70px'},
                });
                console.log(error);
            })

        // console.log(name,email,photoUrl,password);
    }



    return (
        <div>
            <Helmet>
                <title>CraftoPia | Register</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-[40px] mt-6 text-[#FF6D60]">Register</h1>
            </div>
            <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input name="photoUrl" type="text" placeholder="Enter PhotoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="Password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                                <label className="label">
                                    <p className="pt-2 text-sm">Already have an account? <span className="text-blue-400"><Link to='/login'>Login</Link></span></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF6D60] text-white">Create an account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;