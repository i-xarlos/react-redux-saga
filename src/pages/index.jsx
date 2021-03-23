import { Typography } from '@material-ui/core';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import Table from '../components/table/table.component';
import { connect } from 'react-redux';
import { actions, selectors } from '../redux/modules';
import { createStructuredSelector } from 'reselect';

const IndexPage = ({ users, isLoading, deleteUser }) => {
  ////console.log('users', users)

  const handleClick = (e) => {
    console.log('data click', e);
    deleteUser(e.id);
  };
  return (
    <Layout>
      <Typography variant="h2" color="primary">
        Threader Web
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem?
        Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates
        quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum,
        blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo
        obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur
        eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod
        sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis
        asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem?
        Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates
        quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum,
        blanditiis totam.
      </Typography>

      <Table onClick={handleClick} data={users} isLoading={isLoading} />

      <Typography paragraph>
        Lorem ipsum dolor sit amet coknsectetur adipisicing elit. Esse, quidem?
        Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates
        quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum,
        blanditiis totam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Esse, quidem? Officiis adipisci id quod sunt modi facilis, quo
        obcaecati voluptates quia tenetur, blanditiis asperiores non, aspernatur
        eum? Voluptatum, blanditiis totam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Esse, quidem? Officiis adipisci id quod
        sunt modi facilis, quo obcaecati voluptates quia tenetur, blanditiis
        asperiores non, aspernatur eum? Voluptatum, blanditiis totam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem?
        Officiis adipisci id quod sunt modi facilis, quo obcaecati voluptates
        quia tenetur, blanditiis asperiores non, aspernatur eum? Voluptatum,
        blanditiis totam.
      </Typography>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectors.user.selectUserList,
  isLoading: selectors.user.selectUserLoading,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(actions.user.deleteUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
