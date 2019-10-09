import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './ModalComp.css';
import SquareBtn from '../SquareBtn/SquareBtn';
import Title from '../Title/Title';


export function TransitionsModal() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SquareBtn onClick={handleOpen} text={'OPEN MODAL'} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <Title id="transition-modal-title" text={'Transaction history'} />
            <p id="transition-modal-description">Render the list of previous transactions here.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { UIState: state.UI.UIState, }
}

// const mapDispatchToProps = (dispatch) => ({
//   getUserName: () => dispatch(actions.user.getUserName()),
// });

export default connect(mapStateToProps)(TransitionsModal);