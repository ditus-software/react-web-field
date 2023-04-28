/**
 * @jest-environment jsdom
 */

//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import RatingField from './rating-field';

describe('RatingField', () => {
  it('displays the specified label.', async () => {
    render(
      <Formik
        initialValues={{}}
      >
        <Form>
          <RatingField
            label="sample1"
            name="test1"
          />
        </Form>
      </Formik>,
    );

    screen.findByText('sample1');
  });
});
