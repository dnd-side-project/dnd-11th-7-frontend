/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { useModal } from './useModal';

import { Modal } from '.';
import { AppLayout } from '../AppLayout';
import { Button } from '../Button';
import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';

const meta = {
  title: 'components/common/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    showCloseButton: true,
  },
  argTypes: {
    showCloseButton: {
      control: 'boolean',
    },
  },
  render: (args) => {
    const { isOpen, openModal, closeModal, modalRef } = useModal();

    return (
      <AppLayout>
        <FlexBox
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap={10}
          width="50%"
          height="100vh"
          margin="auto"
        >
          <Button variant="primary" height="large" onClick={openModal}>
            모달
          </Button>

          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            title="DND 7팀 회의"
            modalRef={modalRef}
            showCloseButton={args.showCloseButton}
          >
            <FlexBox flexDir="column" gap={10}>
              <Icon name="jjakkak1" size={40} />
              <Button variant="primary" height="large" onClick={closeModal}>
                확인
              </Button>
            </FlexBox>
          </Modal>
        </FlexBox>
      </AppLayout>
    );
  },
};
