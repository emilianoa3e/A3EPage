import { Form } from 'react-bootstrap';
import  CustomButton  from '../../components/shared/CustomButton';

export const Pagination = ({
	previousPage,
	canPreviousPage,
	nextPage,
	canNextPage, 
	pageIndex,
	pageOptions=10,
	pageSize,
	setPageSize,
}) => {
	return (
		<div className='d-flex align-items-center mb-5 flex-column flex-md-row'>
			<div className='pagination-buttons'>
				<CustomButton
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
					text='Anterior'
					className='w-auto px-4 me-2 mb-0'
				/>
				<CustomButton
					onClick={() => nextPage()}
					disabled={!canNextPage}
					text='Siguiente'
					className='w-auto px-4 me-2 mb-0'
				/>
			</div>
			<span className='me-2 my-3'>
				Página{' '}
				<strong>
					{pageIndex + 1} de {pageOptions.length}
				</strong>{' '}
			</span>
			<Form.Select
				value={pageSize}
				style={{ width: 'auto' }}
				onChange={(e) => {
					setPageSize(Number(e.target.value));
				}}
			>
				{[10, 20, 30, 40, 50].map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						Mostrar {pageSize} resultados
					</option>
				))}
			</Form.Select>
		</div>
	);
};
