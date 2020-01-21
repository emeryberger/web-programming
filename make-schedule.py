import datetime
import csv
import io

#import openpyxl
from collections import OrderedDict,defaultdict

fname = "schedule.csv"

# Read in a date in MM/DD/YYYY format and return a string of the form "Dayname, Month dd"
# process_date("03/13/2020") --> "Friday, March 13"


def process_date(date_str):
    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
    # return date_obj.strftime("%A, %B %d")
    return date_obj.strftime("%a")

def process_excel_date(date_str):
    date_obj = datetime.datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')
    # return date_obj.strftime("%A, %B %d")
    return date_obj.strftime("%a")


def date_to_number(date_str):
    #    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
    date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
    return date_obj.timestamp()

#with open('header.html') as header_file:
#    header = header_file.read()
#with open('footer.html') as footer_file:
#    footer = footer_file.read()

header  = "| Number | Day | Date | Topic |  Reading  | Assigned | Due |\n"
header += "| --      | --  | --   | --    |  --       | --       | --  |"

print(header)

rows = {}

with open(fname, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['date'] != "":
            d = date_to_number(row['date'])
            if d != "":
                rows[int(d)] = row

rows = OrderedDict(sorted(rows.items()))
sequence_number = defaultdict(int)

for r in rows:
    #    print(r)
    #    continue
    row = rows[r]
    if row['type'] != "":
        sequence_number[row['type']] += 1
        type_name = row['type'][0].upper() + row['type'][1:]
        print(f"|{type_name + ' ' + str(sequence_number[row['type']])}|{process_date(row['date'])}|{row['date']}|_{row['topic']}_|{'**'+row['reading']+'**' if row['reading'] != '' else ''}|{row['assigned']}|{'**' + row['due'] + '**' if row['due'] != '' else ''}|")


# print(footer)
