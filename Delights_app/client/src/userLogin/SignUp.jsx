import React from 'react'
import signupImage from '../assets/Images/signup.jpg'
import '../assets/CSS/style_signup.css'
import { Link } from 'react-router-dom'
import { TextField, Button, Typography, Box, Card, CardContent } from '@mui/material'

function SignUp() {
    return (
        <div className="hero_section2" >
            
            {/* Left Side - Image */}
            <div className="login_image" style={{ flex: 1 }}>
                <img src={signupImage} alt="Signup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Right Side - Signup Form */}
            <div className="signup_page" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8f9fa' }}>
                <Card sx={{ maxWidth: 420, width: '100%', borderRadius: 3, boxShadow: 4, p: 2 }}>
                    <CardContent>
                        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                            Sign Up
                        </Typography>
                        <Typography variant="body2" align="center" color="textSecondary" mb={3}>
                            Provide your details to create an account
                        </Typography>

                        {/* Form Fields */}
                        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                label="New Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                            />

                            {/* Signup Button */}
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 1, py: 1.5, borderRadius: 2 }}>
                                SIGN UP
                            </Button>
                        </Box>

                        {/* Login Link */}
                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Already have an account?{" "}
                            <Link to="/signin" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 600 }}>
                                Login
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default SignUp
