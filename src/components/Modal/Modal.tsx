import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./modal.css";
import Wallets from "../Wallets/Wallets";
import MarketCard from "../MarketCard/MarketCard";
import Popup from "../Popup/Popup";

const style = {
  position: "absolute" as "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0, 0, 0, 0.616)",
  border: "2px solid #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface Types {
  navbar: boolean;
}
const BasicModal: React.FC<Types> = ({ navbar }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {navbar ? (
        <button onClick={handleOpen} className="connect-btn">
          Connect Wallet
        </button>
      ) : (
        <MarketCard handleOpen={handleOpen} />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box-style" sx={style}>
          {navbar ? (
            <Wallets handleClose={handleClose} />
          ) : (
            <Popup handleClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
