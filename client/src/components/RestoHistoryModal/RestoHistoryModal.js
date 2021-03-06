import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './RestoHistoryModal.css';
import RoundBtn from '../atomic-components/RoundBtn/RoundBtn';
import Title from '../atomic-components/Title/Title';
import actions from '../../redux/actions';
import List from '../List/List';


export function RestoHistoryModal ({ UIState, toggleOpenHistory, array }) {

  let open = UIState.restoHistoryModal;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <RoundBtn text={'x'} onClick={toggleOpenHistory}/>
            <Title id="transition-modal-title" text={'Transaction history'} />
            <List array={array} />
          </div>
        </Fade>
      </Modal>

    </div>
  );
}

const mapStateToProps = (state) => {
  return { UIState: state.UI.resto }
}

const mapDispatchToProps = (dispatch) => ({
  toggleOpenHistory: () => dispatch(actions.UI.toggleOpenHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHistoryModal);