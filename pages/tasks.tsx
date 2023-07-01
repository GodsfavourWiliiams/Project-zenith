import React from 'react';
import { NextPage } from 'next';
import Layout from '../layouts';
import Views from '../views/Tasks';

type Props = {}

const Tasks = (props: Props) => {
  return (
      <Layout>
          <Views />
      </Layout>
  )
}

export default Tasks