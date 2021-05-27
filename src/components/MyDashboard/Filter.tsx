import React from "react";
import { DateFilter, DateFilterOption, defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";
import { availableGranularities } from "./filterOptions";

export interface IDateFilterComponentState {
    selectedFilterOption: DateFilterOption;
    excludeCurrentPeriod: boolean;
}
interface IFilter {
    state: IDateFilterComponentState;
    setStateFn: (input: IDateFilterComponentState) => void;
}

const style = { width: 300 };

const Filter: React.FC<IFilter> = props => {
    const onApply = (selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean) => {
        props.setStateFn({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
    };

    return (
        <div style={style}>
            <DateFilter
                excludeCurrentPeriod={props.state.excludeCurrentPeriod}
                selectedFilterOption={props.state.selectedFilterOption}
                filterOptions={defaultDateFilterOptions}
                availableGranularities={availableGranularities}
                customFilterName="Selected date"
                dateFilterMode="active"
                dateFormat="MM/dd/yyyy"
                onApply={onApply}
            />
        </div>
    );
};

export default Filter;
