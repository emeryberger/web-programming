import datetime
import csv
from collections import OrderedDict,defaultdict

# Read in a date in MM/DD/YYYY format and return a string of the form "Dayname, Month dd"
# process_date("03/13/2020") --> "Friday, March 13"


def process_date(date_str):
    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
    # return date_obj.strftime("%A, %B %d")
    return date_obj.strftime("%a")


def date_to_number(date_str):
    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
    return date_obj.timestamp()

#with open('header.html') as header_file:
#    header = header_file.read()
#with open('footer.html') as footer_file:
#    footer = footer_file.read()

header  = "| Lecture | Day | Date | Topic |  Reading  | Assigned | Due |\n"
header += "| --      | --  | --   | --    |  --       | --       | --  |"

print(header)

rows = {}

with open('schedule.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        d = date_to_number(row['date'])
        if d != "":
            rows[int(d)] = row

rows = OrderedDict(sorted(rows.items()))

sequence_number = defaultdict(int)

for r in rows:
    #    print(r)
    #    continue
    row = rows[r]
    sequence_number[row['type']] += 1
    print(f"|{sequence_number[row['type']]}|{process_date(row['date'])}|{row['date']}|{row['topic']}|{row['reading']}|{row['assigned']}|{row['due']}|")


# print(footer)
