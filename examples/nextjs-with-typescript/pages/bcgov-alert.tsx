import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import Alert from 'component-library-bcgov/Alert';

export default function AlertPage() {
  return (
    <>
      <Alert size="small">
        <Alert.Group>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert>
        <Alert.Group>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert size="large">
        <Alert.Group>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert variant="success">
        <Alert.Group>
          <FontAwesomeIcon icon={faCheckCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert variant="info">
        <Alert.Group>
          <FontAwesomeIcon icon={faCheckCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert variant="warning">
        <Alert.Group>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert variant="danger">
        <Alert.Group>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
      </Alert>

      <br />

      <Alert closable>
        <Alert.Group>
          <FontAwesomeIcon icon={faInfoCircle} />
        </Alert.Group>
        <Alert.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Alert.Content>
        <Alert.Group align="right">
          <Alert.Close>Close</Alert.Close>
        </Alert.Group>
      </Alert>
    </>
  );
}
