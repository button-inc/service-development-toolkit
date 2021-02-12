import MenuGov from 'component-library-gov/Menu';

export default function Menu() {
  return (
    <>
      <MenuGov>
        <MenuGov.Group collapse="700">
          <span>group1</span>
          <span>group2</span>
          <span>group3</span>
        </MenuGov.Group>
        <MenuGov.Item expand="500">item1</MenuGov.Item>
      </MenuGov>
    </>
  );
}
