function DisplayUsers() {
    const table = [];
    const list = table.map((urs) => {
        return (
            <tr>
                <td>{urs.name}</td>
                <td>{urs.age}</td>
                <td>{urs.address}</td>
            </tr>
        );
    })
    return (
        <>
            <tr>
                <th>Họ và tên</th>
                <th>Tuổi</th>
                <th>Địa chỉ</th>
            </tr>
            {list}
        </>
    );
}
export default DisplayUsers;