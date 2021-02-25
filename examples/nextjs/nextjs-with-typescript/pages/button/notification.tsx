import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Notification from 'component-library-button/Notification';
import Button from 'component-library-button/Button';
import ButtonTypography from '../../components/ButtonTypography';

export default function NotificationPage() {
  return (
    <>
      <ButtonTypography />
      <Notification size="small">
        <Notification.Header>Small Standard</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification>
        <Notification.Header>Medium Standard</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification size="large">
        <Notification.Header>Large Standard</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification variant="warning">
        <Notification.Header>Medium Warning</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification variant="danger">
        <Notification.Header>Medium Danger</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification variant="success">
        <Notification.Header>Medium Success</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification>

      <Notification size="small" flex closable>
        <Notification.Group>
          <Notification.Header>Small Standard Close</Notification.Header>
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna,
            efficitur nec mi eu, placerat lacinia sem.
          </Notification.Content>
        </Notification.Group>
        <Notification.Group align="right">
          <Notification.Close>Close</Notification.Close>
        </Notification.Group>
      </Notification>

      <Notification variant="warning" size="medium" flex closable>
        <Notification.Group>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Notification.Group>
        <Notification.Group>
          <Notification.Header>Medium Warning Close</Notification.Header>
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna,
            efficitur nec mi eu, placerat lacinia sem.
          </Notification.Content>
        </Notification.Group>
        <Notification.Group align="right">
          <Notification.Close>Close</Notification.Close>
        </Notification.Group>
      </Notification>

      <Notification variant="danger" size="large" flex closable>
        <Notification.Group>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Notification.Group>
        <Notification.Group>
          <Notification.Header>Large Danger Close</Notification.Header>
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna,
            efficitur nec mi eu, placerat lacinia sem.
          </Notification.Content>
        </Notification.Group>
        <Notification.Group align="right">
          <Notification.Close>Close</Notification.Close>
        </Notification.Group>
      </Notification>

      <Notification variant="success" flex closable>
        <Notification.Group>
          <Notification.Header>Medium Danger Close w/o Icon</Notification.Header>
          <Notification.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna,
            efficitur nec mi eu, placerat lacinia sem.
          </Notification.Content>
        </Notification.Group>
        <Notification.Group align="right">
          <Notification.Close>Close</Notification.Close>
        </Notification.Group>
      </Notification>
    </>
  );
}
