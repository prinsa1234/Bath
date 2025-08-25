const colors = {
  silverfox: '#b8b1a9',
  seahaze: '#b4b9ae',
  heathergray: '#a6afa3',
  bachelorblue: '#778e9b',
  oceanfloor: '#626b73',
  eveningdove: '#49505a',
};

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/login_image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="bg-white/90 p-8 rounded-xl shadow-xl w-full max-w-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '2rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          border: `1px solid ${colors.silverfox}`,
          maxWidth: '28rem',
          width: '100%',
        }}
      >
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '2rem',
            color: colors.eveningdove,
          }}
        >
          LuxBath
        </h1>
        <div
          className="space-y-6"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: colors.oceanfloor,
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.75rem',
                border: `1px solid ${colors.heathergray}`,
                borderRadius: '0.5rem',
                outline: 'none',
                transition: 'ring 0.2s',
              }}
              placeholder="Enter your email"
              onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${colors.bachelorblue}`)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: colors.oceanfloor,
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                marginTop: '0.25rem',
                width: '100%',
                padding: '0.75rem',
                border: `1px solid ${colors.heathergray}`,
                borderRadius: '0.5rem',
                outline: 'none',
                transition: 'ring 0.2s',
              }}
              placeholder="Enter your password"
              onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${colors.bachelorblue}`)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
          </div>
          <button
            className="w-full py-3 rounded-lg text-white font-semibold transition-colors"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              backgroundColor: colors.bachelorblue,
              color: 'white',
              fontWeight: '600',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              border: 'none',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = colors.oceanfloor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = colors.bachelorblue)}
          >
            Log In
          </button>
          <div
            className="flex justify-between gap-4"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <a
              href="#"
              className="flex-1 py-2 text-center rounded-lg border transition-colors"
              style={{
                flex: '1',
                padding: '0.5rem',
                textAlign: 'center',
                borderRadius: '0.5rem',
                border: `1px solid ${colors.seahaze}`,
                color: colors.eveningdove,
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = colors.silverfox)}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Login with Google
            </a>
            <a
              href="#"
              className="flex-1 py-2 text-center rounded-lg border transition-colors"
              style={{
                flex: '1',
                padding: '0.5rem',
                textAlign: 'center',
                borderRadius: '0.5rem',
                border: `1px solid ${colors.seahaze}`,
                color: colors.eveningdove,
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = colors.silverfox)}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Login with Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;