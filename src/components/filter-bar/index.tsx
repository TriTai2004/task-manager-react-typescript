import type { StatusFilter } from "../../hooks/useTasks";

interface Props {
    search: string;
    statusFilter: StatusFilter;
    onSearchChange: (value: string) => void;
    onStatusChange: (value: StatusFilter) => void;
}

const FilterBar = ({ search, statusFilter, onSearchChange, onStatusChange }: Props) => {

    return (
        <>
            <div className="flex flex-col md:flex-row gap-3 border p-3 rounded">
                <div className="md:mb-4 md:p-1 flex-1">
                    <label htmlFor="search" className="block">Search</label>
                    <input
                        type="text"
                        id="search"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search..."
                        className="border w-full rounded-lg p-2 px-3 col-span-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                </div>
                <div className="md:mb-4 md:p-1">
                    <label htmlFor="" className="block">Status</label>
                    <select
                        value={statusFilter}
                        onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
                        className="border focus:ring-1 focus:ring-blue-400 outline-none rounded-lg p-2">
                        <option value="ALL">ALL</option>
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN PROGRESS</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default FilterBar;