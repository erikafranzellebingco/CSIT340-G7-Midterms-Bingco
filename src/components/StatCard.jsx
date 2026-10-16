function StatCard(props){
    return (
        <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
            <p className="text-4xl font-bold text-[#FA8112]">{props.value}</p>
            <p className="mt-1 text-lg">{props.label}</p>
        </div>
    );
}

export default StatCard;