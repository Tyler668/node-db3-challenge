# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT p.ProductName, c.CategoryName
from Products as p
join Categories as c 
on p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT o.OrderID, s.ShipperName, o.OrderDate
from Orders as o
join Shippers as s
where o.ShipperID = s.ShipperID
and o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, o.Quantity, o.OrderID
from Products as p
join OrderDetails as o
where o.ProductID = p.ProductID 
and o.OrderID  = '10251'
order by p.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT o.OrderID as 'Order ID', c.CustomerName as 'Customer Name', e.LastName as 'Employee Last Name'
from Orders as o
join Customers as c 
on c.CustomerID = o.CustomerID
join Employees as e 
on e.EmployeeID = o.EmployeeID


### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT CategoryName, COUNT(*) as Count
from Products
join Categories on Products.CategoryID = Categories.CategoryID
group by CategoryName


### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT o.OrderID, COUNT(*) as ItemCount
from OrderDetails as o
Group by OrderID
        