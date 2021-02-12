import HeaderGov from 'component-library-gov/Header';
import MenuGov from 'component-library-gov/Menu';

export default function Notification() {
  return (
    <>
      <HeaderGov>
        <MenuGov>
          <MenuGov.Item expand="500">
            <HeaderGov.Toggle>Menu</HeaderGov.Toggle>
          </MenuGov.Item>
          <MenuGov.Group>
            <span>group1</span>
            <span>group2</span>
            <span>group3</span>
          </MenuGov.Group>
        </MenuGov>
        <HeaderGov.Sidebar>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <HeaderGov.Toggle>close</HeaderGov.Toggle>
          </ul>
        </HeaderGov.Sidebar>
      </HeaderGov>
    </>
  );
}
