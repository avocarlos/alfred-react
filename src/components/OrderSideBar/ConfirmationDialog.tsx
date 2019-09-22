import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withRouter, RouteComponentProps} from 'react-router-dom';


interface Props extends RouteComponentProps {
  order: object
  setConfirmation: (open: boolean) => void
}

const ConfirmationDialog: React.FC<Props> = (props) => {
  const {order, setConfirmation} = props;

  return (
    <Dialog open={true} onClose={() => setConfirmation(false)}>
      <DialogTitle>Confirmar pedido</DialogTitle>
    </Dialog>
  );
}

export default withRouter(ConfirmationDialog);