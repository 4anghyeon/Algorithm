function solution(id_list, report, k) {
    var answer = [];
    let reportedMap = {};
    report.forEach(r => {
        let reporter, reported;
        [reporter, reported] = r.split(" ");
        if (reportedMap[reported] === undefined) {
            reportedMap[reported] = {
                value: 1,
                reporterSet: (new Set()).add(reporter)
            }
        } else if (!reportedMap[reported].reporterSet.has(reporter)){
            reportedMap[reported].value = reportedMap[reported].value + 1;
            reportedMap[reported].reporterSet = reportedMap[reported].reporterSet.add(reporter)
        }
    });
    id_list.forEach((id, index) => {
        let count = 0;
        Object.values(reportedMap).forEach(report => {
            if (report.value >= k && report.reporterSet.has(id)) count++;
        });

        answer[index] = count;
    });
    return answer;
}
