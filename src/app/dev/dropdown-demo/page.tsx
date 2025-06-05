import DropdownMenu from '../../../components/ui/Dropdown';

export default function ExamplePage() {
  const handleEdit = () => {
    alert('Bạn vừa nhấn chỉnh sửa!');
  };

  return (
    <div className="p-6">
      <div className="flex justify-end">
        <DropdownMenu onEdit={handleEdit} />
      </div>
    </div>
  );
}
