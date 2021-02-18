import NotificationGov from 'component-library-bcgov/Notification';

export default function Notification() {
  return (
    <>
      <NotificationGov variant="secondary">
        <NotificationGov.Header>Header 1</NotificationGov.Header>
        <NotificationGov.Content>Content 1</NotificationGov.Content>
      </NotificationGov>

      <NotificationGov variant="warning" size="medium" closable>
        <NotificationGov.Close>X</NotificationGov.Close>
        <NotificationGov.Header>Header 2</NotificationGov.Header>
        <NotificationGov.Content>Content 2</NotificationGov.Content>
      </NotificationGov>

      <NotificationGov variant="warning" size="medium" close="right" closable>
        <NotificationGov.Close>
          <span>Close</span>
        </NotificationGov.Close>
        <NotificationGov.Header>Header 3</NotificationGov.Header>
        <NotificationGov.Content>Content 3</NotificationGov.Content>
      </NotificationGov>

      <NotificationGov display="inlineBlock" closable>
        <NotificationGov.Close>X</NotificationGov.Close>
        <NotificationGov.Header>Header 4</NotificationGov.Header>
        <NotificationGov.Content>Content 4</NotificationGov.Content>
      </NotificationGov>

      <NotificationGov display="inlineBlock" closable>
        <NotificationGov.Close>X</NotificationGov.Close>
        <NotificationGov.Header>Header 5</NotificationGov.Header>
        <NotificationGov.Content>Content 5</NotificationGov.Content>
      </NotificationGov>

      <NotificationGov textShadow>
        <NotificationGov.Header>Header 6</NotificationGov.Header>
        <NotificationGov.Content>Content 6</NotificationGov.Content>
      </NotificationGov>

      <NotificationGov boxShadow>
        <NotificationGov.Header>Header 7</NotificationGov.Header>
        <NotificationGov.Content>Content 7</NotificationGov.Content>
      </NotificationGov>
    </>
  );
}
