import React from 'react'
import loginImage from '../assets/Images/login_image.jpg'
import '../assets/CSS/style_signin.css'
import { Link } from 'react-router-dom'
import { TextField, Button, Typography, Box, Card, CardContent } from '@mui/material'

function SignIn() {
  return (
    <div className="hero_section1">

      {/* Left Side - Image */}
      <div className="login_image" style={{ flex: 1 }}>
        <img src={loginImage} alt="Login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Right Side - Login Form */}
      <div className="login_page" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8f9fa' }}>
        <Card sx={{ maxWidth: 420, width: '100%', borderRadius: 3, boxShadow: 4, p: 2 }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
              Sign In
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" mb={3}>
              Enter your credentials to access your account
            </Typography>

            {/* Form Fields */}
            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />

              {/* Login Button */}
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 1, py: 1.5, borderRadius: 2 }}>
                SIGN IN
              </Button>
            </Box>

            {/* Links */}
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don’t have an account?{" "}
              <Link to="/sign-up" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 600 }}>
                Sign Up
              </Link>
            </Typography>

            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 500 }}>
                Forgot your password?
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignIn
