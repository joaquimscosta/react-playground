function Table({ data, config, keyFn }) {
  const tableBody = data.map((row) => {
    const renderCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderCells}
      </tr>
    );
  });
  const tableHeaders = config.map((row) => {
    return <td>{row.label}</td>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{tableHeaders}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}

export default Table;
