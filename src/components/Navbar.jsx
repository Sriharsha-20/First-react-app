import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My App</h2>

      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/todos"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Todos
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "16px",
  },
  activeLink: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default Navbar;
