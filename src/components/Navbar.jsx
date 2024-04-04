import "./style.css";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { MdSearch } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Logo from "./../assest/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { TbSend } from "react-icons/tb";

function HeaderMenu() {
  return (
    <Navbar expand="lg" className=" w-auto bg-[#f7f7f7] sticky">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Brand href="#">
          <img className="h-10 max-w-40 ml-5 mt-1" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 text-sm font-semibold text-center gap-3"
            navbarScroll
          >
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
                fontWeight: "bold",
                borderRadius: "14px",
              }}
            >
              Coat/Pent
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
                fontWeight: "bold",
                borderRadius: "14px",
              }}
            >
              Sherwani
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
                fontWeight: "bold",
                borderRadius: "14px",
              }}
            >
              Kurta/Shalwar
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                fontFamily: "inherit",
                fontWeight: "bold",
                borderRadius: "14px",
              }}
            >
              Sale
            </Button>
            {/* <Nav.Link href="#action2">Coat/Pent</Nav.Link>
            <Nav.Link href="#action2">Sherwani</Nav.Link>
            <Nav.Link href="#action2">Kurta/Shalwar</Nav.Link>
            <Nav.Link href="#action2">Sale</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-2 navbar-end align-items-center">
            <div style={{ position: "relative" }}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  width: "224px",
                  backgroundColor: "#E5E5E5",
                  height: "35px",
                  border: "none",
                  borderRadius: "18px",
                  boxShadow: "none",
                }}
              >
                <InputBase
                  sx={{ ml: 3, flex: 1 }}
                  placeholder="ᴛʏᴘᴇ ᴛᴏ ꜱᴇᴀʀᴄʜ..."
                  inputProps={{ '"Ubuntu", sans-serif': "Enter Your Mail" }}
                />
                <IconButton
                  type="button"
                  sx={{
                    position: "relative",
                    marginTop: "3px",
                    left: "5px",
                  }}
                  aria-label="search"
                >
                  <MdSearch className="text-xl" />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Paper>
            </div>
            <div className="flex justify-center ml-3 gap-1">
              <Nav.Link>
                <FaCartShopping className="text-xl" />
              </Nav.Link>
              <Nav.Link>
                <GiSelfLove className="text-xl" />
              </Nav.Link>
              <Nav.Link>
                <FaRegUser className="text-xl" />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
