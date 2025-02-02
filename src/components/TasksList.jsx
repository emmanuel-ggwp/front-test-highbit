import React from 'react';

import Task from './Task';

const TaskList = ({
    tasks,
    loading,
    error,
}) => {

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ul className="notes">
            {tasks.map((item) => (
                <Task task={item} key={item.id} />
            ))}
        </ul>
    );
};

export default TaskList;
